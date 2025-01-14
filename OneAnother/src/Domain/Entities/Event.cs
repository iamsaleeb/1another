using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneAnother.Domain.Entities;
public class Event : BaseAuditableEntity
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset Date { get; set; }
    public string? Location { get; set; }
    public EventType Type { get; set; }
    public Church Church { get; set; } = null!;
    //public List<string> SavedUsers { get; set; } = new();
}

public class RecurringEvent : Event
{
    public DayOfWeek RecurrenceDay { get; set; }
    public string? VariableContent { get; set; } // Content that changes each recurrence
}

public class OneTimeEvent : Event
{
    public DateTimeOffset StartTime { get; set; }
    public DateTimeOffset EndTime { get; set; }
    public bool IsAllDay { get; set; }
    public string? TimeZone { get; set; }
}
