using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

using ContactBookKnockoutWebApp.Models.Abstract;
using ContactBookKnockoutWebApp.Models.Entities;

namespace ContactBookKnockoutWebApp.Models.Concrete
{
    public class EfContactRepository : IContactRepository
    {
        ContactDbContext _context;
        public EfContactRepository()
        {
            _context = new ContactDbContext();
        }
        public Contact AddContact(Contact contact)
        {
            _context.Contacts.Add(contact);
            int recEffected = _context.SaveChanges();
            if (recEffected == 1)
            {
                return contact;
            }
            throw new Exception("AddContactException, Could Not Create New Customer");
        }

        public void DeleteContact(int Id)
        {
            var contact = _context.Contacts.FirstOrDefault(c=>c.Id == Id);
            if (contact == null)
            {
                throw new Exception(string.Format("No Contact With Id: {0}", Id));
            }
            _context.Contacts.Remove(contact);
            _context.SaveChanges();
        }

        public Contact GetContact(int Id)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Id == Id);
            if (contact == null)
            {
                throw new Exception(string.Format("No Contact With Id: {0}", Id));
            }
            return contact;
        }

        public Contact GetContactByPhone(string phone)
        {
            var contact = _context.Contacts.FirstOrDefault(c => c.Phone == phone);
            if (contact == null)
            {
                throw new Exception(string.Format("No Contact With Phone: {0}", phone));
            }
            return contact;
        }

        public ICollection<Contact> GetContactByName(string contactName)
        {
            var contactList = _context.Contacts.Where(c => c.Name == contactName).ToList();
            if (contactList == null)
            {
                throw new Exception(string.Format("No Contact(s) With ContactName: {0}", contactName));
            }
            return contactList;
        }

        public ICollection<Contact> GetContacts()
        {
            return _context.Contacts.ToList();
        }

        public ICollection<Contact> GetContactsByGroup(string groupName)
        {
            var contactList = _context.Contacts.Where(c => c.Group == groupName).ToList();
            if (contactList == null)
            {
                throw new Exception(string.Format("No Contact(s) With ContactName: {0}", groupName));
            }
            return contactList;
        }

        public bool UpdateContact(Contact contact)
        {
            _context.Entry<Contact>(contact).State = System.Data.Entity.EntityState.Modified;
            var recEffected = _context.SaveChanges();
            if (recEffected == 1) return true;
            return false;
        }
    }
}