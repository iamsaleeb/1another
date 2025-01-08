using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneAnother.Domain.Events;
public class EventCreatedEvent : BaseEvent
{
    public EventCreatedEvent(Event @event)
    {
        Event = @event;
    }
    public Event Event { get; }
}
