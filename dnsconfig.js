var cloudflare = NewDnsProvider('cloudflare');
var REG_NONE = NewRegistrar('none');
D("kmlabz.com", REG_NONE,
        DnsProvider(cloudflare),
        A('git', '152.66.211.42'),
        A('@', '192.0.2.1', CF_PROXY_ON),
        CNAME('drone', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('nexus', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('registry', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('www', 'white-island-0674a3203.1.azurestaticapps.net.'),
        MX('@', 24, 'route1.mx.cloudflare.net.'),
        MX('@', 51, 'route2.mx.cloudflare.net.'),
        MX('@', 6, 'route3.mx.cloudflare.net.'),
        TXT('@', 'google-site-verification=cg0LE20BEX78s7fbbuYmDxslaHxJTVra5vBFehxsujk'),
        TXT('@', 'v=spf1 include:_spf.mx.cloudflare.net -all'),
        TXT('_dmarc', 'v=DMARC1; p=reject;')
);
D("tormakristof.eu", REG_NONE,
        DnsProvider(cloudflare),
        A('webgateway', '152.66.211.42'),
        A('mckay', '152.66.211.215'),
        A('oniel', '84.3.214.228'),
        A('ssh', '152.66.211.42'),
        A('v4.oniel', '84.3.214.228'),
        A('vpn', '152.66.211.42'),
        A('woolsey', '152.66.211.211'),
        A('natgw', '152.66.211.42'),
        A('neko', '152.66.211.42'),
        A('@', '192.0.2.1', CF_PROXY_ON),
        AAAA('webgateway', '2001:738:2001:207f:0:211:211:15'),
        AAAA('mckay', '2001:738:2001:207f:0:211:215:0'),
        AAAA('oniel', '2001:4c4c:2086:d000:d250:99ff:feac:5a1c'),
        AAAA('ssh', '2001:738:2001:207f:0:211:211:11'),
        AAAA('v6.oniel', '2001:4c4c:2086:d000:d250:99ff:feac:5a1c'),
        AAAA('vpn', '2001:738:2001:207f:0:211:211:23'),
        AAAA('woolsey', '2001:738:2001:207f:0:211:211:0'),
        AAAA('natgw', '2001:738:2001:207f:0:211:42:0'),
        CNAME('guacamole', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('bitwarden', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('ip', 'oniel.tormakristof.eu.'),
        CNAME('nextcloud', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('matrix', 'webgateway.tormakristof.eu.'),
        CNAME('chat', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('www', 'black-bush-0e3d09303.1.azurestaticapps.net.'),
        CNAME('blog', 'brave-mushroom-038a3c503.1.azurestaticapps.net.'),
        CNAME('static', 'icy-island-08b7c5a03.1.azurestaticapps.net.'),
        CNAME('cv', 'delightful-moss-0ef295b03.1.azurestaticapps.net.'),
        CNAME('hanyadikhetvan', 'fa-hanyadikhetvan.azurewebsites.net.'),
        CNAME('hhv', 'gentle-forest-0be59de03.1.azurestaticapps.net.'),
        CNAME('status', 'cf-workers-status-page-production.tormakristof.workers.dev.'),
        CNAME('fs', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('certauth.fs','webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('grafana','webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('yt', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('speedtest', 'webgateway.tormakristof.eu.', CF_PROXY_ON),
        CNAME('plex','webgateway.tormakristof.eu.'),
        CNAME('autodiscover', 'autodiscover.outlook.com.'),
        CNAME('autodiscover.groups', 'autodiscover.outlook.com.'),
        CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.'),
        CNAME('enterpriseregistration.groups', 'enterpriseregistration.windows.net.'),
        CNAME('enterpriseenrollment', 'enterpriseenrollment.manage.microsoft.com.'),
        CNAME('enterpriseenrollment.groups', 'enterpriseenrollment.manage.microsoft.com.'),
        CNAME('selector1._domainkey','selector1-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('selector2._domainkey','selector2-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('selector1._domainkey.groups','selector1-groups-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('selector2._domainkey.groups','selector2-groups-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('mta-sts','jolly-tree-003905303.4.azurestaticapps.net.'),
        CNAME('mta-sts.groups','victorious-sand-088596203.4.azurestaticapps.net.'),
        MX('@', 0, 'tormakristof-eu.mail.protection.outlook.com.'),
        MX('groups', 0, 'groups-tormakristof-eu.mail.protection.outlook.com.'),
        TXT('_dmarc.groups', 'v=DMARC1; p=reject;'),
        TXT('_atproto', 'did=did:plc:esnvw2g6e3lpx6hr7dmpkcy6'),
        TXT('_dmarc', 'v=DMARC1; p=reject;'),
        TXT('_mta-sts', 'v=STSv1; id=20240119124100Z;'),
        TXT('_mta-sts.groups', 'v=STSv1; id=20240119124100Z;'),
        TXT('@', 'google-site-verification=Y-vwKAKqpWiBNB7ETL6HweEmt2sE38kzEwm87t5rBAQ'),
        TXT('asuid.hanyadikhetvan', '19059E3CC3D821BCE51E705E3506C508708DC1C0077E91D49E10C170165BDE11'),
        TXT('@', 'v=spf1 include:spf.protection.outlook.com -all'),
        TXT('groups', 'v=spf1 include:spf.protection.outlook.com -all')
);
D("torma.xyz", REG_NONE,
        DnsProvider(cloudflare),
        A('@', '192.0.2.1', CF_PROXY_ON),
        MX('@', 10, 'mx01.mail.icloud.com.'),
        MX('@', 10, 'mx02.mail.icloud.com.'),
        CNAME('sig1._domainkey', 'sig1.dkim.torma.xyz.at.icloudmailadmin.com.'),
        TXT('_dmarc', 'v=DMARC1; p=reject;'),
        TXT('@', 'v=spf1 redirect=icloud.com'),
        TXT('@', 'apple-domain=h0Mjsp5TEdNbSNRa')
);
D("tormakris.dev", REG_NONE,
        DnsProvider(cloudflare),
        A('@', '192.0.2.1', CF_PROXY_ON),
        MX('@', 0, 'tormakris-dev.mail.protection.outlook.com.'),
        CNAME('autodiscover','autodiscover.outlook.com.'),
        CNAME('enterpriseregistration','enterpriseregistration.windows.net.'),
        CNAME('enterpriseenrollment','enterpriseenrollment.manage.microsoft.com.'),
        CNAME('selector1._domainkey','selector1-tormakris-dev._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('selector2._domainkey','selector2-tormakris-dev._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('mta-sts','jolly-tree-003905303.4.azurestaticapps.net.'),
        TXT('@', 'v=spf1 ip4:152.66.211.42 include:spf.protection.outlook.com -all'),
        TXT('@', 'google-site-verification=j5a9N2rIead4e3h5baJd1o3xrl7f5n_U82nDfgrZi9I'),
        TXT('@', 'MS=ms71551872'),
        TXT('_dmarc', 'v=DMARC1; p=reject;'),
        TXT('_mta-sts', 'v=STSv1; id=20240119124100Z;')
);
D("csakventillatorok.com", REG_NONE,
        DnsProvider(cloudflare),
        TXT('reszelo', 'vesztettem'),
        TXT('tulajdonos', 'tormakris')
);
