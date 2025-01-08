using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OneAnother.Domain.Entities;
public class Church : BaseAuditableEntity
{
    public string? Name { get; set; }
    public string? Website { get; set; }
    public string? FacebookUrl { get; set; }
    public string? InstagramUrl { get; set; }
    public string? Address { get; set; }
    public IList<Event> Events { get; set; } = new List<Event>();
}
