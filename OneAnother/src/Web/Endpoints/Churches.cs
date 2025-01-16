using Microsoft.AspNetCore.Http.HttpResults;
using OneAnother.Application.Churches.Commands.FollowChurch;
using OneAnother.Application.Churches.Commands.UnFollowChurch;
using OneAnother.Application.Churches.Queries.GetChurch;
using OneAnother.Application.Churches.Queries.GetChurchesWithPagination;
using OneAnother.Application.Common.Models;

namespace OneAnother.Web.Endpoints;

public class Churches : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapGet(GetChurch, "{Id}")
            .MapGet(GetChurchesWithPagination)
            .MapPost(FollowChurch, "follow")
            .MapPost(UnFollowChurch, "unfollow");
    }

    public async Task<Ok<PaginatedList<ChurchDto>>> GetChurchesWithPagination(ISender sender, [AsParameters] GetChurchesWithPaginationQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
    }

    public async Task<Ok<ChurchDto>> GetChurch(ISender sender, [AsParameters] GetChurchQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
    }

    public async Task<Ok> FollowChurch(ISender sender, [AsParameters] FollowChurchCommand command)
    {
        await sender.Send(command);
        return TypedResults.Ok();
    }

    public async Task<Ok> UnFollowChurch(ISender sender, [AsParameters] UnFollowChurchCommand command)
    {
        await sender.Send(command);
        return TypedResults.Ok();
    }
}
