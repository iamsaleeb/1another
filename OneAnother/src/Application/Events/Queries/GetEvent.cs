using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Events.Queries;
public record GetEventQuery : IRequest<EventDto>
{
    public int Id { get; init; }
}

public class GetEventQueryHandler : IRequestHandler<GetEventQuery, EventDto>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    public GetEventQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<EventDto> Handle(GetEventQuery request, CancellationToken cancellationToken)
    {
        var entity = await _context.Events
            .FindAsync(request.Id);

        if (entity == null)
        {
            throw new NotFoundException(nameof(Event), request.Id.ToString());
        }
        
        return _mapper.Map<EventDto>(entity);
    }
}
