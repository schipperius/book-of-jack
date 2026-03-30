source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.

# Use the latest Jekyll instead of the restricted github-pages gem
gem "jekyll", "~> 4.3" 

group :jekyll_plugins do
  gem "jekyll-scholar"
  gem "jekyll-feed" # Optional: common for blogs
  gem "webrick", "~> 1.8" # required for some Ruby versions with Jekyll serve
end

# This is the default theme for new Jekyll sites. You may change this to anything you like.
# gem "minima", "~> 2.5"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]
# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]
# Use `jekyll-sitemap` to generate a sitemap.xml
gem "jekyll-sitemap", "~> 1.4", group: :jekyll
# Use `jekyll-seo-tag` to improve SEO
gem "jekyll-seo-tag", "~> 2.8", group: :jekyll
# Use `faraday` for making HTTP requests
# The "retry" functionality automatically tries a failed web request again
gem 'faraday-retry'
