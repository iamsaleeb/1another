using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneAnother.Application.Common.Interfaces;

namespace OneAnother.Application.Churches.Queries.GetChurch;
public record GetChurchQuery : IRequest<ChurchDto>
{
    public int Id { get; init; }
}

public class GetChurchQueryHandler : IRequestHandler<GetChurchQuery, ChurchDto>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    public GetChurchQueryHandler(IApplicationDbContext context, IMapper mapper)
    {
        _context = context;
        _mapper = mapper;
    }
    public async Task<ChurchDto> Handle(GetChurchQuery request, CancellationToken cancellationToken)
    {
        var entity = await _context.Churches
            .Include(c => c.Events)
            .FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);
        return _mapper.Map<ChurchDto>(entity);
    }
}
