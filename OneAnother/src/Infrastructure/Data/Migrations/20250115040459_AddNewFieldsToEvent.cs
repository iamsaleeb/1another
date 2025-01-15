using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace OneAnother.Infrastructure.Data.Migrations
{
    /// <inheritdoc />
    public partial class AddNewFieldsToEvent : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Type",
                table: "Events",
                newName: "EventType");

            migrationBuilder.AddColumn<int>(
                name: "EventSubType",
                table: "Events",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Speaker",
                table: "Events",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "EventSubType",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "Speaker",
                table: "Events");

            migrationBuilder.RenameColumn(
                name: "EventType",
                table: "Events",
                newName: "Type");
        }
    }
}
