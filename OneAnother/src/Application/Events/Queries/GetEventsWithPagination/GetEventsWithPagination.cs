using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneAnother.Application.Common.Interfaces;
using OneAnother.Application.Common.Mappings;
using OneAnother.Application.Common.Models;

namespace OneAnother.Application.Events.Queries.GetEventsWithPagination;
public record GetEventsWithPaginationQuery : IRequest<PaginatedList<EventDto>>
{
    public int PageNumber { get; init; } = 1;
    public int PageSize { get; init; } = 10;
}

public class GetEventsWithPaginationQueryHandler : IRequestHandler<GetEventsWithPaginationQuery, PaginatedList<EventDto>>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    public GetEventsWithPaginationQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<PaginatedList<EventDto>> Handle(GetEventsWithPaginationQuery request, CancellationToken cancellationToken)
    {
        return await _context.Events
            .OrderBy(x => x.StartDate)
            .ProjectTo<EventDto>(_mapper.ConfigurationProvider)
            .PaginatedListAsync(request.PageNumber, request.PageSize);
    }
}
