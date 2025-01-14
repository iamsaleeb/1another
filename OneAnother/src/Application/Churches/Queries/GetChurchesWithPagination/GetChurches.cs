using OneAnother.Application.Churches.Queries.GetChurch;
using OneAnother.Application.Common.Interfaces;
using OneAnother.Application.Common.Mappings;
using OneAnother.Application.Common.Models;

namespace OneAnother.Application.Churches.Queries.GetChurchesWithPagination;
public record GetChurchesWithPaginationQuery : IRequest<PaginatedList<ChurchDto>>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
}

public class GetChurchesWithPaginationQueryHandler : IRequestHandler<GetChurchesWithPaginationQuery, PaginatedList<ChurchDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    public GetChurchesWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<PaginatedList<ChurchDto>> Handle(GetChurchesWithPaginationQuery request, CancellationToken cancellationToken)
    {
        return await _context.Churches
            .OrderBy(x => x.Name)
            .ProjectTo<ChurchDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}

