using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Mail;
using System.Threading.Tasks;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace BookingTables.Service
{
    public class EmailService: IEmailService
    {
        public async Task SendEmailAsync(string email, string subject, string message)
        {
            var apiKey = "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";
            var client = new SendGridClient(apiKey);
            var from = new EmailAddress("yk0841590@gmail.com", "Booking Table");
            var to = new EmailAddress(email);
            var msg = MailHelper.CreateSingleEmail(from, to, subject, message, null);
            var response = await client.SendEmailAsync(msg);
        }
    }

    public interface IEmailService
    {
        Task SendEmailAsync(string email, string subject, string message);
    }
}
