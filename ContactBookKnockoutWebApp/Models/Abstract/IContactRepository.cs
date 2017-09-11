using System.Collections.Generic;
using ContactBookKnockoutWebApp.Models.Entities;

namespace ContactBookKnockoutWebApp.Models.Abstract
{
    public interface IContactRepository
    {
        ICollection<Contact> GetContacts();
        Contact GetContact(int Id);
        Contact GetContactByPhone(string phone);
        ICollection<Contact> GetContactsByGroup(string groupName);
        ICollection<Contact> GetContactByName(string contactName);
        Contact AddContact(Contact contact);
        bool UpdateContact(Contact contact);
        void DeleteContact(int Id);
    }
}
