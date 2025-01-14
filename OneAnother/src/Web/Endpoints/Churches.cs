
using Microsoft.AspNetCore.Http.HttpResults;
using OneAnother.Application.Churches.Queries.GetChurch;

namespace OneAnother.Web.Endpoints;

public class Churches : EndpointGroupBase
{
    public override void Map(WebApplication app)
    {
        app.MapGroup(this)
            .MapGet(GetChurch, "{Id}");
    }

    public async Task<Ok<ChurchDto>> GetChurch(ISender sender, [AsParameters] GetChurchQuery query)
    {
        var result = await sender.Send(query);
        return TypedResults.Ok(result);
    }
}
