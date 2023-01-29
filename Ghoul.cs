namespace Ghoul
{
    class Program
    {
        static void Main(string[] args)
        {
            int i = 1000;
            do
            {
                Console.WriteLine($"{i}-7={i - 7}");
                i -= 7;
            } while (i > 0);
        }
    }
}