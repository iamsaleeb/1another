﻿using OneAnother.Application.Events.Queries;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Churches.Queries.GetChurch;
public class ChurchDto
{
    public string? Name { get; set; }
    public string? Website { get; set; }
    public string? FacebookUrl { get; set; }
    public string? InstagramUrl { get; set; }
    public string? Address { get; set; }
    public IReadOnlyCollection<EventDto> Events { get; set; } = new List<EventDto>();
    private class Mapping : Profile
    {
        public Mapping()
        {
            CreateMap<Church, ChurchDto>();
        }
    }
}
