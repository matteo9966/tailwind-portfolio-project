#!/bin/bash

ng build --output-path docs --base-href /tailwind-portfolio-project/
cp docs/index.html docs/404.html
git push origin main
