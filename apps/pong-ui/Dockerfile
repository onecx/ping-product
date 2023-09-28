FROM ghcr.io/onecx/docker-spa-base:v1

# Copy applicaiton build
COPY apps/pong-ui/nginx/locations.conf $DIR_LOCATION/locations.conf

# Copy applicaiton build
COPY dist/apps/pong-ui/ $DIR_HTML

#Optional extend list of application environments
#ENV CONFIG_ENV_LIST BFF_URL,APP_BASE_HREF
# Application environments default values
ENV BFF_URL http://pong-ui-bff:8080/
ENV APP_BASE_HREF /pong-ui/

RUN chmod 775 -R $DIR_HTML/assets
USER 1001
