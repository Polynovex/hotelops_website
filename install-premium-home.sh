#!/bin/bash
# Script to update Home.tsx with premium version

echo "🎨 Installing new premium Home page..."

# Backup original
if [ ! -f src/pages/Home.backup.tsx ]; then
  cp src/pages/Home.tsx src/pages/Home.backup.tsx
  echo "✅ Backed up original Home.tsx to Home.backup.tsx"
fi

# Copy new premium version
cp src/pages/Home.new.tsx src/pages/Home.tsx
echo "✅ Premium Home.tsx installed!"

echo ""
echo "📝 Next steps:"
echo "1. Run 'npm run dev' to see the new premium home page"
echo "2. Customize colors in src/theme/premium.ts"
echo "3. To restore original: cp src/pages/Home.backup.tsx src/pages/Home.tsx"
echo ""
echo "🎉 Done! Your premium home page is ready!"
