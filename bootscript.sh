# Install nvm & node 16 + yarn
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash

export NVM_DIR="/home/runner/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

nvm install 16
nvm use 16
npm install -g yarn

# Add default DB_URL to environment variables
echo "export DB_URL=\"postgres://postgres:postgres@localhost:5432/postgres\"" >>~/.zshrc
