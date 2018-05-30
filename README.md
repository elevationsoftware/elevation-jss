
# Deploying to Sitecore

Adding a host entry to Windows

`127.0.0.1  elevated-app.dev.local`

Creating a new IIS binding for the new site

`elevated-app.dev.local`

Create a sitecore configuration file

`jss setup`

Deploy the configuration file to the Sitecore Server

`jss deploy config`

Deploy the app to Sitecore

`jss deploy package --includeContent --includeDictionary`




# Completed application
This is the final applications that showcase the usage of placeholders, layouts, routes, and components.

If you would like to understand each feature, look at the following branches in this specific order:
 - master
 - component
 - routes
 - placeholders

