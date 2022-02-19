var cloudflare = NewDnsProvider("cloudflare", "CLOUDFLAREAPI");
var hedns = NewDnsProvider("hedns", "HEDNS");
var REG_MONITOR = NewRegistrar('DNS-over-HTTPS', 'DNSOVERHTTPS');
D("kmlabz.com", REG_MONITOR,
        DnsProvider(hedns),
        A('git', '152.66.211.211'),
        A('@', '152.66.211.211'),
        AAAA('@', '2001:738:2001:207f:0:211:211:15'),
        IGNORE_NAME("\\*.k8s"),
        CNAME('3682008', 'sendgrid.net.'),
        CNAME('5gcampus', 'ghs.googlehosted.com.'),
        CNAME('asyncapi', 'apache.tormakristof.eu.'),
        CNAME('drone', 'apache.tormakristof.eu.'),
        CNAME('em4002', 'u3682008.wl009.sendgrid.net.'),
        CNAME('em8371', 'u3682008.wl009.sendgrid.net.'),
        CNAME('glitchtip', 'apache.tormakristof.eu.'),
        CNAME('guacamole', 'apache.tormakristof.eu.'),
        CNAME('jaeger', 'apache.tormakristof.eu.'),
        CNAME('k8s', 'apache.tormakristof.eu.'),
        CNAME('keycloak', 'apache.tormakristof.eu.'),
        CNAME('lb-1', 'zelenka.tormakristof.eu.'),
        CNAME('nexus', 'apache.tormakristof.eu.'),
        CNAME('registry', 'apache.tormakristof.eu.'),
        CNAME('s1._domainkey', 's1.domainkey.u3682008.wl009.sendgrid.net.'),
        CNAME('s2._domainkey', 's2.domainkey.u3682008.wl009.sendgrid.net.'),
        CNAME('sentry', 'apache.tormakristof.eu.'),
        CNAME('sonar', 'apache.tormakristof.eu.'),
        CNAME('swagger', 'apache.tormakristof.eu.'),
        CNAME('url7681', 'sendgrid.net.'),
        CNAME('wekan', 'zelenka.tormakristof.eu.'),
        CNAME('www', 'apache.tormakristof.eu.'),
        CNAME('xwiki', 'apache.tormakristof.eu.'),
        TXT('@', 'google-site-verification=cg0LE20BEX78s7fbbuYmDxslaHxJTVra5vBFehxsujk'),
        TXT('@', 'v=spf1 include:u3682008.wl009.sendgrid.net -all', TTL(3600)),
        TXT('_dmarc', 'v=DMARC1; p=reject; pct=25; rua=mailto:tormakristof@tormakristof.eu.;')
);
D("tormakristof.eu", REG_MONITOR,
        DnsProvider(cloudflare),
        A('apache', '152.66.211.211'),
        A('mckay', '152.66.211.215'),
        A('oniel', '188.157.165.102'),
        A('ssh', '152.66.211.211'),
        A('v4.oniel', '188.157.165.102'),
        A('vpn', '152.66.211.211'),
        A('woolsey', '152.66.211.211'),
        A('zelenka', '152.66.211.42'),
        A('@', '152.66.211.211'),
        A('mail', '152.66.211.211'),
        AAAA('mail', '2001:738:2001:207f:0:211:211:5'),
        AAAA('@', '2001:738:2001:207f:0:211:211:15'),
        AAAA('apache', '2001:738:2001:207f:0:211:211:15'),
        AAAA('mckay', '2001:738:2001:207f:0:211:215:0'),
        AAAA('oniel', '2001:4c4c:2083:9800:d250:99ff:feac:5a1c'),
        AAAA('session', '2001:738:2001:207f:0:211:215:9'),
        AAAA('ssh', '2001:738:2001:207f:0:211:211:11'),
        AAAA('v6.oniel', '2001:4c4c:2083:9800:d250:99ff:feac:5a1c'),
        AAAA('vpn', '2001:738:2001:207f:0:211:211:23'),
        AAAA('vs', '2001:738:2001:207f:0:211:215:10'),
        AAAA('woolsey', '2001:738:2001:207f:0:211:211:0'),
        AAAA('zelenka', '2001:738:2001:207f:0:211:42:0'),
        CNAME('autodiscover', 'autodiscover.outlook.com.'),
        CNAME('bitwarden', 'woolsey.tormakristof.eu.'),
        CNAME('enterpriseenrollment', 'enterpriseenrollment-s.manage.microsoft.com.'),
        CNAME('enterpriseregistration', 'enterpriseregistration.windows.net.'),
        CNAME('ftb', 'mckay.tormakristof.eu.'),
        CNAME('ip', 'oniel.tormakristof.eu.'),
        CNAME('lyncdiscover', 'webdir.online.lync.com.'),
        CNAME('mc', 'woolsey.tormakristof.eu.'),
        CNAME('msoid', 'clientconfig.microsoftonline-p.net.'),
        CNAME('nextcloud', 'woolsey.tormakristof.eu.'),
        CNAME('rabbit', 'woolsey.tormakristof.eu.'),
        CNAME('onielweb', 'v6.oniel.tormakristof.eu.', CF_PROXY_ON),
        CNAME('sch', 'zelenka.tormakristof.eu.'),
        CNAME('selector1._domainkey', 'selector1-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('selector2._domainkey', 'selector2-tormakristof-eu._domainkey.tormakristof.onmicrosoft.com.'),
        CNAME('sip', 'sipdir.online.lync.com.'),
        CNAME('ts', 'mckay.tormakristof.eu.'),
        CNAME('wac', 'mckay.tormakristof.eu.'),
        CNAME('www', 'tormakristof.eu.'),
        CNAME('static', 'icy-island-08b7c5a03.1.azurestaticapps.net.'),
        MX('@', 10, 'tormakristof-eu.mail.protection.outlook.com.', TTL(60)),
        MX('@', 0, 'mail.tormakristof.eu.'),
        SRV('_sipfederationtls._tcp', 100, 1, 5061, 'sipfed.online.lync.com.'),
        SRV('_sip._tls', 100, 1, 443, 'sipfed.online.lync.com.'),
        TXT('bixchange._domainkey', 'v=DKIM1; h=sha256; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA7WOWjInFXAwoyf7/Ddlgs4Cwl/zxddOHcNez3DX61ZCCgTBOfuXo/PLzD1o6eq2g7M39D7OmPKuU5Ihl9hQcsgOIQr+RbtDyzKOCu0xuk+0pjKIp7/olJP3vZhBW3ySMtfky8BOcjzsb+UeHS09/Bt9RfS3qKb1opSfYTSncq69OzIC/oWTZjQ3mxfcBdF+hjxWFXo5/RFt9eEfZQef8x5Q7F9IbhE336UOVzwFTd//YfretCs2tRWk16WhOOC5MBWQRZxvIg3dDeAuoS93N7pSM3nkQzehoqhyZxeylFoA0B8r0cpMa4XaHO2N7n7Y0RrAApgWZohdgGiVk7xpHrwIDAQAB'),
        TXT('_dmarc', 'v=DMARC1; p=reject;'),
        TXT('@', 'google-site-verification=Y-vwKAKqpWiBNB7ETL6HweEmt2sE38kzEwm87t5rBAQ'),
        TXT('@', 'v=spf1 mx include:spf.protection.outlook.com -all')
);
D("torma.xyz", REG_MONITOR,
        DnsProvider(hedns),
        DefaultTTL(3600),
        A('@', '152.66.211.211', TTL(300)),
        AAAA('@', '2001:738:2001:207f:0:211:211:15', TTL(300)),
        MX('@', 10, 'mx01.mail.icloud.com.'),
        MX('@', 10, 'mx02.mail.icloud.com.'),
        CNAME('sig1._domainkey', 'sig1.dkim.torma.xyz.at.icloudmailadmin.com.'),
        TXT('@', 'v=spf1 redirect=icloud.com'),
        TXT('@', 'apple-domain=h0Mjsp5TEdNbSNRa')
);
D("tormakris.dev", REG_MONITOR,
        DnsProvider(hedns),
        DefaultTTL(3600),
        A('@', '152.66.211.211', TTL(300)),
        AAAA('@', '2001:738:2001:207f:0:211:211:15', TTL(300)),
        MX('@', 1, 'ASPMX.L.GOOGLE.COM.'),
        MX('@', 5, 'ALT1.ASPMX.L.GOOGLE.COM.'),
        MX('@', 5, 'ALT2.ASPMX.L.GOOGLE.COM.'),
        MX('@', 10, 'ALT3.ASPMX.L.GOOGLE.COM.'),
        MX('@', 10, 'ALT4.ASPMX.L.GOOGLE.COM.'),
        CNAME('calendar', 'ghs.googlehosted.com.'),
        CNAME('docs', 'ghs.googlehosted.com.'),
        CNAME('groups', 'ghs.googlehosted.com.'),
        CNAME('mail', 'ghs.googlehosted.com.'),
        CNAME('sites', 'ghs.googlehosted.com.'),
        TXT('google._domainkey', ['v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArDLuWVTcV3GW+j2x1sImCeKuaVBmqa1UmG+ZCZU7wbSpkaRXQVITnFD3a974FipWRCwxJh1aJfkDHc3slXsv6MxmDCxIs1tMtfBihH8jGTQnUX3sqawHJSRHgQiAiASu13wYUUxcbV10xDRQICEH6BPuKqBvemWqYCWQqyhLYcx2GUfOUXOb0sJJV0bYyiGp4', 'wWBLWnj1WouvGlVWfalQnCjqyA9skctxpRvcxiQqRIBqYj6QG6sD+PFtDHJHnfdoWoqKeEW1t+TEM2mZWJviap0441sntn9UY7MBWIVz150XMFnBxxrYxkJQGyXKswGk8xDdmak/F42RUpe5hHn+wIDAQAB']),
        TXT('@', 'v=spf1 include:_spf.google.com -all'),
        TXT('@', 'google-site-verification=j5a9N2rIead4e3h5baJd1o3xrl7f5n_U82nDfgrZi9I', TTL(300)),
        TXT('_dmarc', 'v=DMARC1; p=reject;')
);
D("csakventillatorok.com", REG_MONITOR,
        DnsProvider(hedns),
        TXT('reszelo', 'vesztettem'),
        TXT('tulajdonos', 'tormakris')
);