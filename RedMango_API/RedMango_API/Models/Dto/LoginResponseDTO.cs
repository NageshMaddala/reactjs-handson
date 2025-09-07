namespace RedMango_API.Models.Dto
{
    public class LoginResponseDTO
    {
        public string Email { get; set; }
        /// <summary>
        /// This token can contain email, userid, role of the user and any other details
        /// </summary>
        public string Token { get; set; }
    }
}
