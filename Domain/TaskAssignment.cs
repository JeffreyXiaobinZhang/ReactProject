using System;

namespace Domain
{
    public class TaskAssignment
    {
        public int Id { get; set; }
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
        public int ProjectId { get; set; }
        public string ItemName { get; set; }
        public string ItemDescription { get; set; }
        public string ItemCategory { get; set; }
        public string TechnicianEmail { get; set; }
<<<<<<< HEAD
=======
        public string TeamMember { get; set; }
        public string Remark { get; set; }
>>>>>>> 399497b842e31bfacfdff32494c9ab7a9dfd37b6
    }
}