using Microsoft.AspNetCore.Mvc;
using RedMango_API.Data;
using RedMango_API.Models;
using RedMango_API.Models.Dto;
using RedMango_API.Services;
using RedMango_API.Utility;

namespace RedMango_API.Controllers
{
    [Route("api/MenuItem")]
    [ApiController]
    public class MenuItemController : ControllerBase
    {
        private readonly ApplicationDbContext _db;
        private ApiResponse _response;
        //private readonly IBlobService _blobService;

        public MenuItemController(ApplicationDbContext db)
        {
            _db = db;
            //_blobService = blobService;
            _response = new ApiResponse();
        }

        [HttpGet]
        public async Task<IActionResult> GetMenuItems()
        {
            _response.Result = _db.MenuItems;
            _response.StatusCode = System.Net.HttpStatusCode.OK;
            return Ok(_response);
        }

        [HttpGet("{id:int}", Name = "GetMenuItem")]
        public async Task<IActionResult> GetMenuItem(int id)
        {
            if (id == 0)
            {
                _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                _response.IsSuccess = false;
                return BadRequest(_response);
            }

            MenuItem menuItem = _db.MenuItems.FirstOrDefault(u => u.Id == id);

            if (menuItem == null)
            {
                _response.StatusCode = System.Net.HttpStatusCode.NotFound;
                _response.IsSuccess = false;

                return NotFound(_response);
            }

            _response.Result = menuItem;
            _response.StatusCode = System.Net.HttpStatusCode.OK;
            return Ok(_response);
        }

        /// <summary>
        /// FromForm is used instead of body because a image is being upload/sent via the request
        /// </summary>
        /// <param name="menuItemCreateDto"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult<ApiResponse>> CreateMenuItem([FromForm] MenuItemCreateDTO menuItemCreateDto)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (menuItemCreateDto.File == null || menuItemCreateDto.File.Length == 0)
                    {
                        _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                        _response.IsSuccess = false;
                        return BadRequest();
                    }

                    // Use Automapper here
                    string fileName = $"{Guid.NewGuid()}{Path.GetExtension(menuItemCreateDto.File.FileName)}";
                    MenuItem menuItemToCreate = new()
                    {
                        Name = menuItemCreateDto.Name,
                        Price = menuItemCreateDto.Price,
                        Category = menuItemCreateDto.Category,
                        SpecialTag = menuItemCreateDto.SpecialTag,
                        Description = menuItemCreateDto.Description,
                        Image = ""
                        //Image = await _blobService.UploadBlob(fileName, SD.SD_Storage_Container, menuItemCreateDto.File)
                    };
                    _db.MenuItems.Add(menuItemToCreate);
                    _db.SaveChanges();

                    _response.Result = menuItemToCreate;
                    _response.StatusCode = System.Net.HttpStatusCode.Created;
                    return CreatedAtRoute("GetMenuItem", new { id = menuItemToCreate.Id }, _response);
                }
                else
                {
                    _response.IsSuccess = false;
                }
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string>() { ex.ToString() };
            }
            return _response;
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult<ApiResponse>> UpdateMenuItem(int id, [FromForm] MenuItemUpdateDTO menuItemUpdateDto)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    if (menuItemUpdateDto == null || id != menuItemUpdateDto.Id)
                    {
                        _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                        _response.IsSuccess = false;
                        return BadRequest();
                    }

                    MenuItem menuItemFromDb = await _db.MenuItems.FindAsync(id);
                    if (menuItemFromDb == null)
                    {
                        _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                        _response.IsSuccess = false;
                        return BadRequest();
                    }

                    menuItemFromDb.Name = menuItemUpdateDto.Name;
                    menuItemFromDb.Price = menuItemUpdateDto.Price;
                    menuItemFromDb.Category = menuItemUpdateDto.Category;
                    menuItemFromDb.SpecialTag = menuItemUpdateDto.SpecialTag;
                    menuItemFromDb.Description = menuItemUpdateDto.Description;

                    if (menuItemUpdateDto.File != null && menuItemUpdateDto.File.Length > 0)
                    {
                        // Upload image to azure here
                        //await 
                    }

                    _db.MenuItems.Update(menuItemFromDb);
                    _db.SaveChanges();

                    _response.StatusCode = System.Net.HttpStatusCode.NoContent;
                    return Ok(_response);
                }
                else
                {
                    _response.IsSuccess = false;
                }
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string>() { ex.ToString() };
            }
            return _response;
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult<ApiResponse>> DeleteMenuItem(int id)
        {
            try
            {
                if (id == 0)
                {
                    _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    _response.IsSuccess = false;
                    return BadRequest();
                }

                MenuItem menuItemFromDb = await _db.MenuItems.FindAsync(id);

                if (menuItemFromDb == null)
                {
                    _response.StatusCode = System.Net.HttpStatusCode.BadRequest;
                    _response.IsSuccess = false;
                    return BadRequest();
                }

                // Introducing some delay just to get experience
                int milliseconds = 2000;
                Thread.Sleep(milliseconds);

                // Delete image from azure too

                _db.MenuItems.Remove(menuItemFromDb);
                _db.SaveChanges();
                _response.StatusCode = System.Net.HttpStatusCode.NoContent;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages = new List<string>() { ex.ToString() };
            }
            return _response;
        }
    }
}
