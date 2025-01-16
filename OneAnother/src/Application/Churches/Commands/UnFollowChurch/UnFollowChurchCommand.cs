using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Churches.Commands.UnFollowChurch;
public record UnFollowChurchCommand : IRequest
{
    public int ChurchId { get; init; }
}

public class UnFollowChurchCommandHandler : IRequestHandler<UnFollowChurchCommand>
{
    private readonly IApplicationDbContext _context;
    private readonly IUser _currentUser;
    public UnFollowChurchCommandHandler(IApplicationDbContext context, IUser currentUser)
    {
        _context = context;
        _currentUser = currentUser;
    }
    public async Task Handle(UnFollowChurchCommand request, CancellationToken cancellationToken)
    {
        var church = await _context.Churches.FindAsync(request.ChurchId) ?? throw new NotFoundException(nameof(Church), request.ChurchId.ToString());
        var user = _currentUser.Id ?? throw new UnauthorizedAccessException();

        if (!church.FollowerUserIds.Contains(user))
        {
            throw new InvalidOperationException("User does not follow this church");
        }

        church.FollowerUserIds.Remove(user);
        await _context.SaveChangesAsync(cancellationToken);
    }
}
