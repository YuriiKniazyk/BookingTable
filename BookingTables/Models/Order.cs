using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace BookingTables.Models
{
    public class Order
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }
        public DateTime DateStart { get; set; } //hour
        public int TimeOfBooking { get; set; } //in minutes
        public int CountUser { get; set; }
        public Guid UserId { get; set; }
        public Guid TableId { get; set; }
        [ForeignKey(nameof(TableId))]
        public Table Table { get; set; }

    }
}
