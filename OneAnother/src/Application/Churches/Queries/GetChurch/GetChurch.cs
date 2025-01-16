using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using OneAnother.Application.Common.Interfaces;
using OneAnother.Domain.Entities;

namespace OneAnother.Application.Churches.Queries.GetChurch;
public record GetChurchQuery : IRequest<ChurchDto>
{
    public int Id { get; init; }
}

public class GetChurchQueryHandler : IRequestHandler<GetChurchQuery, ChurchDto>
{
    private readonly IApplicationDbContext _context;
    private readonly IMapper _mapper;
    private readonly IUser _currentUser;
    public GetChurchQueryHandler(IApplicationDbContext context, IMapper mapper, IUser currentUser)
    {
        _context = context;
        _mapper = mapper;
        _currentUser = currentUser;
    }
    public async Task<ChurchDto> Handle(GetChurchQuery request, CancellationToken cancellationToken)
    {
        var entity = await _context.Churches
            .Include(c => c.Events)
            .FirstOrDefaultAsync(c => c.Id == request.Id, cancellationToken);

        if (entity == null)
        {
            throw new NotFoundException(nameof(Church), request.Id.ToString());
        }

        if (_currentUser.Id == null)
        {
            return _mapper.Map<ChurchDto>(entity);
        }

        var churchDto = _mapper.Map<ChurchDto>(entity);
        churchDto.IsFollowed = entity.FollowerUserIds.Contains(_currentUser.Id);

        return churchDto;
    }
}
