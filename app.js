const articles = document.querySelectorAll('article');

for (const article of articles.values()) {
    
    
    new Waypoint.Inview({
        
        element: article,
        entered(direction) {
            
            if (direction == 'down') {
                article.classList.remove('move-down');
            }
            
        },
        exit(direction) {
            
            if (direction == 'up') {
                article.classList.add('move-down');
            }
            
        }
        
    });
    
    
}