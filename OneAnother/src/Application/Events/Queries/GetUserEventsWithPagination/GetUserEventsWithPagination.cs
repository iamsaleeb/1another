using OneAnother.Application.Common.Interfaces;
using OneAnother.Application.Common.Mappings;
using OneAnother.Application.Common.Models;

namespace OneAnother.Application.Events.Queries.GetUserEventsWithPagination;
public record GetUserEventsWithPaginationQuery : IRequest<PaginatedList<EventDto>>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
}

public class GetUserEventsWithPaginationQueryHandler : IRequestHandler<GetUserEventsWithPaginationQuery, PaginatedList<EventDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly IUser _currentUser;
    public GetUserEventsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper, IUser currentUser)
    {
        _context = context;
        _mapper = mapper;
        _currentUser = currentUser;
    }
    public async Task<PaginatedList<EventDto>> Handle(GetUserEventsWithPaginationQuery request, CancellationToken cancellationToken)
    {
        var userId = _currentUser.Id ?? throw new UnauthorizedAccessException();

        return await _context.Events
            .Where(x => x.AttendeeUserIds.Contains(userId))
            .OrderBy(x => x.StartDate)
            .ProjectTo<EventDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}
