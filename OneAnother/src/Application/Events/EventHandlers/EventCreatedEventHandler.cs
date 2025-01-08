using Microsoft.Extensions.Logging;
using OneAnother.Domain.Events;

namespace OneAnother.Application.Events.EventHandlers;
public class EventCreatedEventHandler : INotificationHandler<EventCreatedEvent>
{
    private readonly ILogger<EventCreatedEventHandler> _logger;

    public EventCreatedEventHandler(ILogger<EventCreatedEventHandler> logger)
    {
        _logger = logger;
    }

    public Task Handle(EventCreatedEvent notification, CancellationToken cancellationToken)
    {
        _logger.LogInformation("OneAnother Domain Event: {DomainEvent}", notification.GetType().Name);

        return Task.CompletedTask;
    }
}
