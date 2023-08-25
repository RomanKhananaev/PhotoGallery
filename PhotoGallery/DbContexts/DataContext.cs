using Microsoft.EntityFrameworkCore;
using PhotoGallery.Entities;

namespace PhotoGallery.DbContexts
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> option)
            :base(option) { }
        public DbSet<User> Users => Set<User>();
    }
}
