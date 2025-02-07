﻿using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Application.TechnicianRates;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TechnicianRatesController : ControllerBase
    {
        private readonly IMediator _mediator;

        public TechnicianRatesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<TechnicianRate>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        //[HttpGet("{id}")]
        //public async Task<ActionResult<TechnicianRate>> Details(int id)
        //{
            //return await _mediator.Send(new Details.Query {Id = id});
        //}

        [HttpGet("{email}")]
        public async Task<ActionResult<List<TechnicianRate>>> Search(string email)
        {
            return await _mediator.Send(new Search.Query { Email = email });
        }

        [HttpPost]
        public async Task<ActionResult<Unit>> Create(Create.Command command)
        {
            return await _mediator.Send(command);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<Unit>> Edit(int id, Edit.Command command)
        { 
            command.Id = id;
            return await _mediator.Send(command);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<Unit>> Delete(int id)
        {
            return await _mediator.Send(new Delete.Command {Id = id});
        }

        
    }
}
