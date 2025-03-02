﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneAnother.Domain.Entities;
public class Event : BaseAuditableEntity
{
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset StartDate { get; set; }
    public DateTimeOffset EndDate { get; set; }
    public string? Location { get; set; }
    public string? Speaker { get; set; }
    public EventType EventType { get; set; }
    public EventSubType EventSubType { get; set; }
    public Church Church { get; set; } = null!;
    public IList<string> AttendeeUserIds { get; set; } = new List<string>();
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
