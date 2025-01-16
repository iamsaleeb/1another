using Microsoft.AspNetCore.Http.HttpResults;
using OneAnother.Application.Common.Models;
using OneAnother.Application.Events.Commands.CreateEvent;
using OneAnother.Application.Events.Commands.FollowEvent;
using OneAnother.Application.Events.Commands.UnFollowEvent;
using OneAnother.Application.Events.Queries;
using OneAnother.Application.Events.Queries.GetEventsWithPagination;
using OneAnother.Application.Events.Queries.GetUserEventsWithPagination;

namespace OneAnother.Web.Endpoints;

public class Events : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .RequireAuthorization()
            .MapGet(GetEvent, "{Id}")
            .MapGet(GetEventsWithPagination)
            .MapGet(GetUserEventsWithPagination, "user")
            .MapPost(CreateEvent)
            .MapPost(FollowEvent, "follow")
            .MapPost(UnFollowEvent, "unfollow");
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

    public async Task<Ok> FollowEvent(ISender sender, [AsParameters] FollowEventCommand command)
    {
        await sender.Send(command);
        return TypedResults.Ok();
    }

    public async Task<Ok> UnFollowEvent(ISender sender, [AsParameters] UnFollowEventCommand command)
    {
        await sender.Send(command);
        return TypedResults.Ok();
    }

    public async Task<Ok<PaginatedList<EventDto>>> GetUserEventsWithPagination(ISender sender, [AsParameters] GetUserEventsWithPaginationQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
    }
}
