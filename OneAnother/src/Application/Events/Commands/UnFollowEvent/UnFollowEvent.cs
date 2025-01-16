using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Events.Commands.UnFollowEvent;
public record UnFollowEventCommand : IRequest
{
    public int EventId { get; init; }
}

public class UnFollowEventCommandHandler : IRequestHandler<UnFollowEventCommand>
{
    private readonly IApplicationDbContext _context;
    private readonly IUser _currentUser;
    public UnFollowEventCommandHandler(IApplicationDbContext context, IUser currentUser)
    {
        _context = context;
        _currentUser = currentUser;
    }
    public async Task Handle(UnFollowEventCommand request, CancellationToken cancellationToken)
    {
        var eventEntity = await _context.Events.FindAsync(request.EventId)
                          ?? throw new NotFoundException(nameof(Event), request.EventId.ToString());
        var userId = _currentUser.Id ?? throw new UnauthorizedAccessException();
        if (!eventEntity.AttendeeUserIds.Contains(userId))
        {
            throw new InvalidOperationException("User does not follow this event.");
        }
        eventEntity.AttendeeUserIds.Remove(userId);
        await _context.SaveChangesAsync(cancellationToken);
    }
}
