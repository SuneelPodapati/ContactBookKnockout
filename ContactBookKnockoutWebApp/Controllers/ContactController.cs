using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using ContactBookKnockoutWebApp.Models.Abstract;
using ContactBookKnockoutWebApp.Models.Concrete;
using ContactBookKnockoutWebApp.Models.Entities;

namespace ContactBookKnockoutWebApp.Controllers
{
    [RoutePrefix("api/contact")]
    public class ContactController : ApiController
    {
        IContactRepository _contactRepository;
        public ContactController()
        {
            _contactRepository = new EfContactRepository();
        }

        [Route("")]
        public IEnumerable<Contact> GetContacts() {
            //http://localhost:8327/api/contact
            return _contactRepository.GetContacts();
        }

        [Route("{id}", Name = "GetContactById")]
        public Contact GetContact(int id){
            //http://localhost:8327/api/contact/<1>
            return _contactRepository.GetContact(id);
        }

        [Route("phone/{phone}", Name = "GetContactByPhone")]
        public Contact GetContactByPhone(string phone){
            //http://localhost:8327/api/contact/phone/<12345>
            return _contactRepository.GetContactByPhone(phone);
        }

        [Route("name/{contactName}", Name = "GetContactByName")]
        public IEnumerable<Contact> GetContactByName(string contactName){
            //http://localhost:8327/api/contact/name/<Tintin>
            return _contactRepository.GetContactByName(contactName);
        }

        [Route("group/{groupName}", Name = "GetContactByGroupName")]
        public IEnumerable<Contact> GetContactsByGroup(string groupName){
            //http://localhost:8327/api/contact/group/<family>
            return _contactRepository.GetContactsByGroup(groupName);
        }

        [Route("")]
        [HttpPost]
        public HttpResponseMessage PostContact(Contact contact) {
            contact = _contactRepository.AddContact(contact);
            var response = Request.CreateResponse<Contact>(HttpStatusCode.Created, contact);

            string uri = Url.Link("GetContactById", new { Id = contact.Id });
            response.Headers.Location = new Uri(uri);
            return response;
        }

        [Route("{id}")]
        [HttpPut]
        public void PutContact(int id, Contact contact) {
            contact.Id = id;
            if (!_contactRepository.UpdateContact(contact))
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
        }

        [Route("{id}")]
        public void DeleteContact(int id) {
            Contact contact = _contactRepository.GetContact(id);
            if (contact == null)
            {
                throw new HttpResponseException(HttpStatusCode.NotFound);
            }
            _contactRepository.DeleteContact(id);
        }

    }
}
