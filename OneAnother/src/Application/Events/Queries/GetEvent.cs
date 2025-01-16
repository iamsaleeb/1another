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
    private readonly IUser _currentUser;
    public GetEventQueryHandler(IApplicationDbContext context, IMapper mapper, IUser currentUser)
    {
        _context = context;
        _mapper = mapper;
        _currentUser = currentUser;
    }
    public async Task<EventDto> Handle(GetEventQuery request, CancellationToken cancellationToken)
    {
        var entity = await _context.Events
            .Include(x => x.Church)
            .FirstOrDefaultAsync(x => x.Id == request.Id, cancellationToken);

        if (entity == null)
        {
            throw new NotFoundException(nameof(Event), request.Id.ToString());
        }

        if (_currentUser.Id == null)
        {
            return _mapper.Map<EventDto>(entity);
        }

        var eventDto = _mapper.Map<EventDto>(entity);

        eventDto.IsAttending = entity.AttendeeUserIds.Contains(_currentUser.Id);

        return eventDto;
    }
}
