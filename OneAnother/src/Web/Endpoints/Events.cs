
using Microsoft.AspNetCore.Http.HttpResults;
using OneAnother.Application.Events.Commands.CreateEvent;
using OneAnother.Application.Events.Queries;

namespace OneAnother.Web.Endpoints;

public class Events : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapGet(GetEvent)
            .MapPost(CreateEvent);
    }

    public async Task<Ok<EventDto>> GetEvent(ISender sender, [AsParameters] GetEventQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
    }

    public async Task<Created<int>> CreateEvent(ISender sender, CreateEventCommand command)
    {
        var id = await sender.Send(command);

        return TypedResults.Created($"/{nameof(Events)}/{id}", id);
    }
}
