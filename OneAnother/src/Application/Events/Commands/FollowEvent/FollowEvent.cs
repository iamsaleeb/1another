using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Events.Commands.FollowEvent;
public record FollowEventCommand : IRequest
{
    public int EventId { get; init; }
}

public class FollowEventCommandHandler : IRequestHandler<FollowEventCommand>
{
    private readonly IApplicationDbContext _context;
    private readonly IUser _currentUser;
    public FollowEventCommandHandler(IApplicationDbContext context, IUser currentUser)
    {
        _context = context;
        _currentUser = currentUser;
    }
    public async Task Handle(FollowEventCommand request, CancellationToken cancellationToken)
    {
        var eventEntity = await _context.Events.FindAsync(request.EventId)
                          ?? throw new NotFoundException(nameof(Event), request.EventId.ToString());
        var userId = _currentUser.Id ?? throw new UnauthorizedAccessException();

        if (eventEntity.AttendeeUserIds.Contains(userId))
        {
            throw new InvalidOperationException("User already follows this event.");
        }

        eventEntity.AttendeeUserIds.Add(userId);

        await _context.SaveChangesAsync(cancellationToken);
    }
}
