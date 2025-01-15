using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;
using OneAnother.Domain.Enums;
using OneAnother.Domain.Events;

namespace OneAnother.Application.Events.Commands.CreateEvent;
public record CreateEventCommand : IRequest<int>
{
    public string? Title { get; init; }
    public string? Description { get; init; }
    public DateTimeOffset Date { get; init; }
    public string? Location { get; init; }
    public EventType Type { get; init; }
    public int ChurchId { get; init; }
}

public class CreateEventCommandHandler : IRequestHandler<CreateEventCommand, int>
{
    private readonly IApplicationDbContext _context;
    public CreateEventCommandHandler(IApplicationDbContext context)
    {
        _context = context;
    }
    public async Task<int> Handle(CreateEventCommand request, CancellationToken cancellationToken)
    {
        var entity = new Event
        {
            Title = request.Title,
            Description = request.Description,
            StartDate = request.Date,
            Location = request.Location,
            EventType = request.Type,
            Church = await _context.Churches.FindAsync(request.ChurchId) ?? throw new NotFoundException(nameof(Church), request.ChurchId.ToString())
        };

        entity.AddDomainEvent(new EventCreatedEvent(entity));

        _context.Events.Add(entity);

        await _context.SaveChangesAsync(cancellationToken);

        return entity.Id;
    }
}
