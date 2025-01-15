using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Churches.Commands.FollowChurch;
public record FollowChurchCommand : IRequest
{
    public int ChurchId { get; init; }
}

public class FollowChurchCommandHandler : IRequestHandler<FollowChurchCommand>
{
    private readonly IApplicationDbContext _context;
    private readonly IUser _currentUser;
    public FollowChurchCommandHandler(IApplicationDbContext context, IUser currentUser)
    {
        _context = context;
        _currentUser = currentUser;
    }
    public async Task Handle(FollowChurchCommand request, CancellationToken cancellationToken)
    {
        var church = await _context.Churches.FindAsync(request.ChurchId) ?? throw new NotFoundException(nameof(Church), request.ChurchId.ToString());
        var user = _currentUser.Id ?? throw new UnauthorizedAccessException();

        church.FollowerUserIds.Add(user);

        await _context.SaveChangesAsync(cancellationToken);
    }
}

