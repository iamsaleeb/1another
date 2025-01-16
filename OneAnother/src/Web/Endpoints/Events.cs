
using Microsoft.AspNetCore.Http.HttpResults;
using OneAnother.Application.Common.Models;
using OneAnother.Application.Events.Commands.CreateEvent;
using OneAnother.Application.Events.Queries;
using OneAnother.Application.Events.Queries.GetEventsWithPagination;

namespace OneAnother.Web.Endpoints;

public class Events : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetEvent, "{Id}")
            .MapGet(GetEventsWithPagination)
            .MapPost(CreateEvent);
    }

    public async Task<Ok<PaginatedList<EventDto>>> GetEventsWithPagination(ISender sender, [AsParameters] GetEventsWithPaginationQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
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
