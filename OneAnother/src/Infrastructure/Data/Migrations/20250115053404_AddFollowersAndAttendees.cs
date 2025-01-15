using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OneAnother.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddFollowersAndAttendees : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AttendeeUserIds",
                table: "Events",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[]");

            migrationBuilder.AddColumn<string>(
                name: "FollowerUserIds",
                table: "Churches",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "[]");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AttendeeUserIds",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "FollowerUserIds",
                table: "Churches");
        }
    }
}
