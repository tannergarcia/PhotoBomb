import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Subscription } from 'rxjs';

import { Warning } from '../icons';
import { WarningTypes } from '../icons';
import { WarningService } from '../services';

@Component({ selector: 'alert', templateUrl: 'warnings.html' })
export class AlertComponent implements OnInit, OnDestroy {
    @Input() name = 'default-warning';
    @Input() remove = true;

    alerts: Warning[] = [];
    activate_alert!: Subscription;
    activate_routes!: Subscription;

    constructor(private router: Router, private service_alert: WarningService) { }

    ngOnInit() {
        this.activate_alert = this.service_alert.show_warn(this.name)
            .subscribe((alert: Warning) => {
                if (!alert.content) {
                    this.alerts = this.alerts.filter(warn => warn.static_route);

                    this.alerts.forEach(warn => delete warn.static_route);
                    return;
                }

                this.alerts.push(alert);

                if (alert.closing) {
                    setTimeout(() => this.hide_warn(alert), 3000);
                }
           });

        this.activate_routes = this.router.events.subscribe((event: any) => {
            if (event instanceof NavigationStart) {
                this.service_alert.clear_warnings(this.name);
            }
        });
    }

    ngOnDestroy() {
        this.activate_alert.unsubscribe();
        this.activate_routes.unsubscribe();
    }

    hide_warn(alert: Warning) {
        if (!this.alerts.includes(alert)) return;

        if (this.remove) {
            alert.fade = true;

            setTimeout(() => {
                this.alerts = this.alerts.filter(x => x !== alert);
            }, 250);
        } else {
            this.alerts = this.alerts.filter(x => x !== alert);
        }
    }

    checkClass(alert: Warning) {
        if (!alert) return;

        const classes = ['alert', 'alert-dismissible', 'mt-4', 'container'];
                
        const alertTypeClass = {
            [WarningTypes.Green]: 'alert-success', [WarningTypes.Red]: 'alert-danger', [WarningTypes.Blue]: 'alert-info', [WarningTypes.Yellow]: 'alert-warning'
        }

        if (alert.type !== undefined) {
            classes.push(alertTypeClass[alert.type]);
        }

        if (alert.fade) {
            classes.push('fade');
        }

        return classes.join(' ');
    }
}