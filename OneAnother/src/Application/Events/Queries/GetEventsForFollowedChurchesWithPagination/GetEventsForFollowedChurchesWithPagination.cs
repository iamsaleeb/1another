using OneAnother.Application.Common.Interfaces;
using OneAnother.Application.Common.Mappings;
using OneAnother.Application.Common.Models;

namespace OneAnother.Application.Events.Queries.GetEventsForFollowedChurchesWithPagination;
public record GetEventsForFollowedChurchesWithPaginationQuery : IRequest<PaginatedList<EventDto>>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
}

public class GetEventsForFollowedChurchesWithPaginationQueryHandler : IRequestHandler<GetEventsForFollowedChurchesWithPaginationQuery, PaginatedList<EventDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly IUser _currentUser;
    public GetEventsForFollowedChurchesWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper, IUser currentUser)
    {
        _context = context;
        _mapper = mapper;
        _currentUser = currentUser;
    }
    public async Task<PaginatedList<EventDto>> Handle(GetEventsForFollowedChurchesWithPaginationQuery request, CancellationToken cancellationToken)
    {
        var userId = _currentUser.Id ?? throw new UnauthorizedAccessException();

        var followedChurchIds = await _context.Churches
            .Where(x => x.FollowerUserIds.Contains(userId))
            .Select(x => x.Id)
            .ToListAsync(cancellationToken);

        var events = await _context.Events
            .Where(e => followedChurchIds.Contains(e.Church.Id))
            .OrderBy(e => e.StartDate)
            .ProjectTo<EventDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);

        return events;
    }
}
