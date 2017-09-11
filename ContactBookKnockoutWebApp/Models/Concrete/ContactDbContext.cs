using System.Data.Entity;

using ContactBookKnockoutWebApp.Models.Entities;

namespace ContactBookKnockoutWebApp.Models.Concrete
{
    public class ContactDbContext: DbContext
    {
        public ContactDbContext() : base("ContactBookConnectionString") { }
        public DbSet<Contact> Contacts { get; set; }
    }
}