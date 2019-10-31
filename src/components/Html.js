// @flow
import React from 'react';
import serialize from 'serialize-javascript';

import config from '../config';

/* eslint-disable react/no-danger */

type PropTypes = {|
  title: string,
  description: string,
  keywords: string,
  // eslint-disable-next-line react/require-default-props
  styles?: Array<{
    id: string,
    cssText: string,
  }>,
  // eslint-disable-next-line react/require-default-props
  scripts?: Array<string>,
  // eslint-disable-next-line react/require-default-props
  asyncScripts?: Array<string>,
  // eslint-disable-next-line react/require-default-props
  asyncLinks?: Array<string>,
  app: Object, // eslint-disable-line
  children: string,
|};

const Html = ({
  title,
  description,
  keywords,
  styles = [],
  scripts = [],
  asyncScripts = [],
  asyncLinks = [],
  app,
  children,
}: PropTypes) => (
  <html className="no-js" lang="fr">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#555555" />
      {scripts.map(script => (
        <link key={script} rel="preload" href={script} as="script" />
      ))}
      {asyncLinks.map(link => link)}
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="apple-touch-icon" sizes="192x192" href="/icon-192.png" />
      <link rel="icon" sizes="192x192" href="/icon-192.png" />
      <link rel="icon" sizes="512x512" href="/icon-512.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
        rel="stylesheet"
      />
      {styles.map(style => (
        <style
          key={style.id}
          id={style.id}
          dangerouslySetInnerHTML={{ __html: style.cssText }}
        />
      ))}
    </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{ __html: children }} />
      <script
        dangerouslySetInnerHTML={{ __html: `window.App=${serialize(app)}` }}
      />
      {scripts.map(script => (
        <script key={script} src={script} />
      ))}
      {asyncScripts.map(script => script)}
      {config.analytics.googleTrackingId && (
        <script
          dangerouslySetInnerHTML={{
            __html:
              'window.ga=function(){ga.q.push(arguments)};ga.q=[];ga.l=+new Date;' +
              `ga('create','${config.analytics.googleTrackingId}','auto');ga('send','pageview')`,
          }}
        />
      )}
      {config.analytics.googleTrackingId && (
        <script
          src="https://www.google-analytics.com/analytics.js"
          async
          defer
        />
      )}
    </body>
  </html>
);

export default Html;
