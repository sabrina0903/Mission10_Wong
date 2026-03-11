using System.ComponentModel.DataAnnotations;

namespace Mission10_Wong.Data
{
    public class Team
    {
        [Key]
        public int TeamId { get; set; }

        public string? TeamName { get; set; }
    }
}