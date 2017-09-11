namespace ContactBookKnockoutWebApp.DataMigrations
{
    using ContactBookKnockoutWebApp.Models.Entities;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ContactBookKnockoutWebApp.Models.Concrete.ContactDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            MigrationsDirectory = @"DataMigrations";
        }

        protected override void Seed(ContactBookKnockoutWebApp.Models.Concrete.ContactDbContext context)
        {
            context.Contacts.AddOrUpdate(c=>c.Name,
                new Contact { Name = "Tintin", Phone = "12345", Group = "Friend"},
                new Contact { Name = "Snowy", Phone = "23456", Group = "Family" },
                new Contact { Name = "Haddock", Phone = "34567", Group = "Friend" },
                new Contact { Name = "Mickey", Phone = "45678", Group = "Family" },
                new Contact { Name = "Donald", Phone = "56789", Group = "Friend" },
                new Contact { Name = "Mini", Phone = "67890", Group = "Friend" },
                new Contact { Name = "Bageera", Phone = "78901", Group = "Professional" },
                new Contact { Name = "Mowgli", Phone = "89012", Group = "Gym" }
                );
        }
    }
}
