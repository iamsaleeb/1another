using OneAnother.Domain.Entities;
using OneAnother.Domain.Enums;

namespace OneAnother.Application.Events.Queries;
public class EventDto
{
    public int Id { get; set; }
    public string? Title { get; set; }
    public string? Description { get; set; }
    public DateTimeOffset Date { get; set; }
    public string? Location { get; set; }
    public EventType Type { get; set; }
    public int ChurchId { get; set; }
    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Event, EventDto>()
                .ForMember(d => d.ChurchId, opt => opt.MapFrom(s => s.Church.Id));
        }
    }
}
