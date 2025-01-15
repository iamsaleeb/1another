using OneAnother.Domain.Entities;
using OneAnother.Domain.Enums;

namespace OneAnother.Application.Events.Queries;
public class EventDto
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset StartDate { get; set; }
    public DateTimeOffset EndDate { get; set; }
    public string? Location { get; set; }
    public string? Speaker { get; set; }
    public EventType EventType { get; set; }
    public EventSubType EventSubType { get; set; }
    public string? ChurchName { get; set; }
    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Event, EventDto>()
                .ForMember(d => d.ChurchName, opt => opt.MapFrom(s => s.Church.Name));
        }
    }
}
