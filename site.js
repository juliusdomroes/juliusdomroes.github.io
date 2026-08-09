(function () {
    const lang = document.documentElement.lang || 'de';
    const translations = window.siteTranslations && window.siteTranslations[lang] ? window.siteTranslations[lang] : window.siteTranslations && window.siteTranslations.de ? window.siteTranslations.de : {};
    const socialContainer = document.getElementById('social-links');
    const affiliateContainer = document.getElementById('affiliate-links');

    document.title = translations.title || document.title;

    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        const key = element.getAttribute('data-i18n');
        if (translations[key]) {
            element.textContent = translations[key];
        }
    });

    const profileImage = document.querySelector('.profile-image');
    if (profileImage && translations.profileAlt) {
        profileImage.setAttribute('alt', translations.profileAlt);
    }

    if (!window.siteLinks) {
        return;
    }

    if (socialContainer) {
        socialContainer.innerHTML = '';
        window.siteLinks.social.forEach(function (item) {
            const link = document.createElement('a');
            link.href = item.url;
            link.className = 'link-card';
            link.target = '_blank';
            link.rel = 'noopener';

            const icon = document.createElement('i');
            icon.className = 'fa-brands ' + item.icon;
            link.appendChild(icon);
            link.appendChild(document.createTextNode(' ' + (item.label[lang] || item.label.de)));

            socialContainer.appendChild(link);
        });
    }

    if (affiliateContainer) {
        affiliateContainer.innerHTML = '';
        window.siteLinks.affiliates.forEach(function (item) {
            const itemContainer = document.createElement('div');
            itemContainer.className = 'affiliate-item';

            const title = document.createElement('div');
            title.className = 'affiliate-title';
            const titleText = document.createElement('strong');
            titleText.textContent = item.title[lang] || item.title.de || '';
            title.appendChild(titleText);

            if (item.description) {
                const desc = document.createElement('span');
                desc.textContent = item.description[lang] || item.description.de || '';
                title.appendChild(desc);
            }

            const actions = document.createElement('div');
            actions.className = 'affiliate-actions';

            const copyButton = document.createElement('button');
            copyButton.type = 'button';
            copyButton.className = 'link-card affiliate-copy';
            copyButton.style.display = 'inline-flex';
            copyButton.style.alignItems = 'center';
            copyButton.style.justifyContent = 'center';
            copyButton.style.width = '100%';
            copyButton.style.textAlign = 'center';

            const codeValue = document.createElement('span');
            codeValue.className = 'affiliate-copy-code';
            codeValue.style.fontSize = '0.8rem';
            codeValue.textContent = item.copyValue || 'JULIUS5';
            copyButton.appendChild(codeValue);

            copyButton.addEventListener('click', function () {
                const value = item.copyValue || '';
                if (!value) {
                    return;
                }

                navigator.clipboard.writeText(value).then(function () {
                    codeValue.textContent = 'Copied';
                    window.setTimeout(function () {
                        codeValue.textContent = item.copyValue || 'JULIUS5';
                    }, 1500);
                }).catch(function () {
                    codeValue.textContent = 'Copy failed';
                });
            });

            const link = document.createElement('a');
            link.href = item.url;
            link.className = 'link-card';
            link.target = '_blank';
            link.rel = 'sponsored';
            link.textContent = item.ctaLabel[lang] || item.ctaLabel.de || 'Open offer';

            actions.appendChild(copyButton);
            actions.appendChild(link);

            if (item.extraActions && item.extraActions.length) {
                item.extraActions.forEach(function (extraAction) {
                    const extraLink = document.createElement('a');
                    extraLink.href = extraAction.url;
                    extraLink.className = 'link-card';
                    extraLink.target = '_blank';
                    extraLink.rel = 'sponsored';
                    extraLink.textContent = extraAction.label[lang] || extraAction.label.de || 'Open';
                    actions.appendChild(extraLink);
                });
            }

            itemContainer.appendChild(title);
            itemContainer.appendChild(actions);
            affiliateContainer.appendChild(itemContainer);
        });
    }
})();
