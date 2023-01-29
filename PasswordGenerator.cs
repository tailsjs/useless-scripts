namespace PassGen
{
    class Program
    {
        static void Main(string[] args)
        {
            Random rnd = new Random();
            string Symbols = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM0123456789!@#$%^&*_";
            int passLength = 10;
            string result = "";

            for(var i = 0; i < passLength; i++)
            {
                result += Symbols[rnd.Next(Symbols.Length)];
            };
            Console.WriteLine(result);
            Console.WriteLine("Press ENTER");
            Console.ReadLine(); // wow
        }
    }
}